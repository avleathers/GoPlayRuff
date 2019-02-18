import React from 'react';
// import ReactDOM from 'react';
import { Motion, spring } from 'react-motion';
import _ from "lodash";
import image_part_001 from "./Assets/image_part_001.jpg"
import image_part_002 from "./Assets/image_part_002.jpg"
import image_part_003 from "./Assets/image_part_003.jpg"
import image_part_004 from "./Assets/image_part_004.jpg"
import image_part_005 from "./Assets/image_part_005.jpg"
import image_part_006 from "./Assets/image_part_006.jpg"
import image_part_007 from "./Assets/image_part_007.jpg"
import image_part_008 from "./Assets/image_part_008.jpg"



const { Component } = React
// const {render} = ReactDOM
// const {range} = _

const images = [
  image_part_001, image_part_002, image_part_003, image_part_004, image_part_005, image_part_006, image_part_007, image_part_008
];



const tilesStyle = {
  listStyle: 'none',
  margin: '0 auto',
  padding: 5,
  position: 'relative'
}

const tileStyle = {
  backgroundImage: "images[0]",
  boxShadow: 'inset 0 0 1px 0 black',
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute'
}

const holeStyle = {
  opacity: 0
}

const buttonStyle = {
  display: 'block',
  margin: '16px auto',
  padding: '8px 16px',
  background: '#2e7d32',
  flexDirection: 'row'
}

// Checks if the puzzle can be solved.
//
// Examples:
//   isSolvable([3, 7, 6, 0, 5, 1, 2, 4, 8], 3, 3) // => false
//   isSolvable([6, 4, 5, 0, 1, 2, 3, 7, 8], 3, 3) // => true
function isSolvable(numbers, rows, cols) {
  let product = 1
  for (let i = 1, l = rows * cols - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (numbers[i - 1] - numbers[j - 1]) / (i - j)
    }
  }
  return Math.round(product) === 1
}

// Checks if the puzzle is solved.
//
// Examples:
//   isSolved([6, 4, 5, 0, 1, 2, 3, 7, 8]) // => false
//   isSolved([0, 1, 2, 3, 4, 5, 6, 7, 8]) // => true
function isSolved(numbers) {
  for (let i = 0, l = numbers.length; i < l; i++) {
    if (numbers[i] !== i) {
      return false
    }
  }
  return true
}

// Get the linear index from a row/col pair.
// function getLinearPosition ({row, col}, rows, cols) {
//   return parseInt(row, 10) * cols + parseInt(col, 10)
// }

// Get the row/col pair from a linear index.
function getMatrixPosition(index, rows, cols) {
  return {
    row: Math.floor(index / cols),
    col: index % cols
  }
}

function getVisualPosition({ row, col }, width, height) {
  return {
    x: col * width,
    y: row * height
  }
}

function shuffle(numbers, hole, rows, cols) {
  do {
    numbers = _.shuffle(_.without(numbers, hole)).concat(hole)
  } while (isSolved(numbers) || !isSolvable(numbers, rows, cols))
  return numbers
}

function canSwap(src, dest, rows, cols) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(src, rows, cols)
  const { row: destRow, col: destCol } = getMatrixPosition(dest, rows, cols)
  return (Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1)
}

function swap(numbers, src, dest) {
  numbers = _.clone(numbers);
  [numbers[src], numbers[dest]] = [numbers[dest], numbers[src]]
  return numbers
}

class Tile extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { index } = this.props
    this.props.onClick(index)
  }

  render() {
    const { hole, number, index, rows, cols, width, height } = this.props
    const matrixPos = getMatrixPosition(index, rows, cols)
    const visualPos = getVisualPosition(matrixPos, width, height)
    const motionStyle = {
      translateX: spring(visualPos.x),
      translateY: spring(visualPos.y)
    }
    const style = {
      ...tileStyle,
      ...(number === hole ? holeStyle : {}),
      width,
      height
    }

    return (
      <Motion style={motionStyle} >
        {({ translateX, translateY }) => (
          <li style={{ ...style, transform: `translate3d(${translateX}px, ${translateY}px, 0)` }}
            onClick={this.handleClick}
          >

            <img src={this.props.image} width={100} height={100} />


          </li>
        )}
      </Motion>
    )
  }
}

class Tiles extends Component {
  constructor(props) {
    super(props)

    const { rows, cols } = props
    this.state = { numbers: _.range(0, rows * cols) }

    this.handleTileClick = this.handleTileClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleTileClick(index) {
    this.swap(index)
  }

  handleButtonClick() {
    this.shuffle()
  }

  shuffle() {
    const { hole, rows, cols } = this.props
    const { numbers } = this.state
    const shuffledNumbers = shuffle(numbers, hole, rows, cols)
    this.setState({ numbers: shuffledNumbers })
  }

  swap(tileIndex) {
    const { hole, rows, cols } = this.props
    const { numbers } = this.state
    const holeIndex = numbers.indexOf(hole)
    if (canSwap(tileIndex, holeIndex, rows, cols)) {
      const newNumbers = swap(numbers, tileIndex, holeIndex)
      this.setState({ numbers: newNumbers })
    }
  }

  render() {
    const { rows, cols, width, height } = this.props
    const { numbers } = this.state
    const solved = isSolved(numbers)
    const pieceWidth = Math.round(width / cols)
    const pieceHeight = Math.round(height / rows)
    const style = {
      ...tilesStyle,
      width,
      height
    }

    return (
      <div>
        <ul style={style}>
          {numbers.map((number, index) => (
            <Tile {...this.props} index={index} number={number} key={number}
              width={pieceWidth} height={pieceHeight} image={images[number]}
              onClick={this.handleTileClick}
            />
          ))}
        </ul>
        <button style={buttonStyle}
          onClick={this.handleButtonClick}
        >
          {solved ? 'START' : 'RESTART'}
        </button>
      </div>
    )
  }
}

// <--------React Stopwatch-------->

class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer); // new
    this.setState({ runningTime: 0, status: false });
  };

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>

      </div>
    );
  }
}

// render the puzzle and stopwatch as a component 


class Puzzle extends Component {
  render() {
    return (
      <div>
      <Stopwatch/>
      <Tiles rows={3} cols={3} hole={8}
        width={300} height={300}
      />
      
      </div>
    )
  }
}

export default Puzzle;