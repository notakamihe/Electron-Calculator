import React, {useState} from 'react'
import useStateWithCallback, { useStateWithCallbackLazy } from 'use-state-with-callback'
import './App.css';

const App = () => {
    const [ans, setAns] = useStateWithCallbackLazy(0)
    const [a, setA] = useState(0)
    const [b, setB] = useStateWithCallbackLazy(0)
    const [term, setTerm] = useState(1)
    const [operation, setOperation] = useState("")
    const [display, setDisplay] = useState('0')

    const add = (a, b) => {
        return parseFloat((a + b).toFixed(7))
    }

    const subtract = (a, b) => {
        return parseFloat((a - b).toFixed(7))
    }

    const multiply = (a, b) => {
        return parseFloat((a * b).toFixed(7))
    }

    const divide = (a, b) => {
        return parseFloat((a / b).toFixed(7))
    }

    const pow = (a, b) => {
        return parseFloat(Math.pow(a, b).toFixed(7))
    }

    const root = (a, b) => {
        return parseFloat(Math.pow(a, 1 / b).toFixed(7))
    }

    const addDigit = digit => {
        if (display == '0') {
            setDisplay(digit.toString())
        } else {
            setDisplay(display + digit.toString())
        }
    }

    const clear = () => {
        setDisplay('0')

        if (term == 2) {
            setTerm(1)
        }
    }

    const setOp = op => {
        if (term == 2) {
            setOperation(op)
            return;
        }

        clear()
        setA(parseInt(display))
        setTerm(2)
        setOperation(op)
    }

    const calc = () => {
        setB(parseInt(display), (currentB) => {
            setTerm(1)
        
            switch (operation) {
                case "add":
                    setAns(add(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
                case "sub":
                    setAns(subtract(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
                case "mult":
                    setAns(multiply(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
                case "div":
                    setAns(divide(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
                case "pow":
                    setAns(pow(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
                case "rt":
                    setAns(root(a, currentB), (currentAns) => {
                        setDisplay(currentAns)
                    })

                    break
            }
        })
    }

    return (
        <div style={{padding: 16, backgroundColor: "#fff"}}>
            <div 
                style={{
                    backgroundColor: "#0001", 
                    width: "100%", 
                    margin: "auto", 
                    borderRadius: 10,
                    padding: 8,
                    boxSizing: 'border-box'
                }}
            >
                <h1 style={{textAlign: 'right', margin: 0, marginRight: 16, fontSize: 40}}>{display}</h1>
            </div>
            <div style={{marginTop: 36}}>
                
                <div 
                    style={{
                        width: "100%",  
                        display: "flex", 
                        justifyContent: 'space-evenly',
                        margin: "16px auto"
                    }}
                >
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("pow")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>
                            x<sup>y</sup>
                        </p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("rt")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>
                            <sup>y</sup>&radic;x
                        </p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("div")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>&divide;</p>
                    </button>
                </div>
                <div 
                    style={{
                        width: "100%",  
                        display: "flex", 
                        justifyContent: 'space-evenly',
                        margin: "16px auto"
                    }}
                >
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("mult")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>&times;</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("sub")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>
                            -
                        </p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "30%", borderRadius: 5, border: "none"}}
                        onClick={() => setOp("add")}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>+</p>
                    </button>
                </div>
                <div 
                    style={{
                        width: "100%",  
                        display: "flex", 
                        justifyContent: 'space-evenly',
                        margin: "16px auto"
                    }}
                >
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(0)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>0</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(1)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>1</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(2)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>2</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(3)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>3</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(4)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>4</p>
                    </button>
                </div>
                <div 
                    style={{
                        width: "100%",  
                        display: "flex", 
                        justifyContent: 'space-evenly',
                        margin: "16px auto"
                    }}
                >
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(5)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>5</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(6)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>6</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(7)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>7</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(8)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>8</p>
                    </button>
                    <button 
                        style={{backgroundColor: "#0001", width: "16%", borderRadius: 5, border: "none"}}
                        onClick={() => addDigit(9)}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20}}>9</p>
                    </button>
                </div>
                <div 
                    style={{
                        width: "100%",  
                        display: "flex", 
                        justifyContent: 'space-evenly',
                        margin: "16px auto"
                    }}
                >
                    <div style={{backgroundColor: "#04f", width: "45%", borderRadius: 5}}>
                        <p 
                            style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20, color: "#fff"}}
                            onClick={clear}
                        >
                            C
                        </p>
                    </div>
                    <button 
                        style={{backgroundColor: "#04f", width: "45%", borderRadius: 5, border: "none"}}
                        onClick={() => calc()}
                    >
                        <p style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20, color: "#fff"}}>=</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;