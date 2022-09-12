import './App.css';
import vido from "./vidro/mov_bbb.mp4"
import {useState, useEffect, useRef} from "react";

function App() {

    const [bars,setBars] = useState(true)
    const [captionb, setCaptionb] = useState([]);
    let [start,setStart] = useState([]);
    let [End, setEnd] = useState([]);

    let useref = useRef(null)
    function Addcpationbox() {
        const abc = [ ...captionb, []]

        console.log("this tis what", abc)
        setCaptionb(abc)

    }

    let changingdata = (onChangeValue, index) => {
        const inputdata = [...captionb]
        inputdata[index] = onChangeValue.target.value;
        setCaptionb(inputdata)
        console.log("onchanging function", captionb)

    }

    let remove = (items) => {
        console.log("happy this", items)
        const delbox = [...captionb];
        console.log(delbox)
        delbox.splice(items, 1);
        setCaptionb(delbox);
        console.log(captionb)

    }

    function Savedragt() {
        console.log("acces perticular data", captionb[3])
        console.log(captionb, "from ssave")
        console.log(start, "from ssave")
        console.log(End, "from ssave")
    }

    let [count, setCount] = useState(1)
    function display(e) {
        console.log(start)
        if ((`${e.key}`.charCodeAt(0) >= 48 && `${e.key}`.charCodeAt(0) <= 58) || e.key === " ") {
            setCount(() => count++)

        } else {
            alert("her dont charecter its time enter valid time")
        }

    }
    function onhover() {

        useref.current.style.bottom = "30%"
        useref.current.style.color = "blue";
        console.log("use ref is working ")
    }

    let onout = () => {
        useref.current.style.bottom = "10%"
    }
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <div className="hedname">
                        <i className="fa-solid fa-message"></i>
                        <span>Hindi</span>
                    </div>
                    <div className="leftpart">
                        <button className="save-button" onClick={Savedragt}>SAVE DRAFT</button>
                        <i className="fa-solid fa-xmark"></i>
                    </div>

                </header>
                {/* video or caption container */}
                <div className="section2">
                    <div className="child">
                        {/* first row start */}
                        <div className="first-row">
                            <span className="addcaprionbox" onClick={Addcpationbox}>+ CAPTION</span>
                            <div className="rigfhtbar" onClick={() => setBars(!bars)}>
                                {(bars)
                                    ? <i className="fa-solid fa-ellipsis-vertical"></i>
                                    : <i className="fa-solid fa-xmark"></i>
}
                                {(!bars)
                                    ? <div className="sprade">
                                            <ul >
                                                <li>Download Subtitle</li>
                                                <li>Edit Text</li>
                                            </ul>

                                        </div>
                                    : undefined
}

                            </div>

                        </div>
                        {/* first row End */}

                        {/* Second Caption component */}

                        <div className="caption-container">
                            {captionb.map((info, index) => {
                                return (
                                    <div key={index} className='caption-Row'>
                                        <table border={0} cellPadding="0">
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={2}>
                                                        <textarea
                                                            name=""
                                                            value={info}
                                                            id=""
                                                            cols=""
                                                            rows="4"
                                                            onChange={(e) => {
                                                            changingdata(e, index)
                                                        }}
                                                            className="caption-text-area"></textarea>
                                                    </td>
                                                    <td
                                                        rowSpan={2}
                                                        style={{
                                                        "padding": '2vw'
                                                    }}>
                                                        <i
                                                            className="fa-solid fa-trash"
                                                            onClick={() => {
                                                            remove(index)
                                                        }}></i>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            onKeyDown={display}
                                                            name='start'
                                                            value={start}
                                                            onChange={(e) => {
                                                            setStart(e.target.value)
                                                        }}
                                                            className="start-time"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            onKeyPress={display}
                                                            name='End'
                                                            value={End}
                                                            onChange={(e) => {
                                                            setEnd(e.target.value)
                                                        }}
                                                            className="start-time"/>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>

                                    </div>

                                )
                            })
}
                        </div>

                    </div>
                    <div className="child videobox">
                        <div className="video-container">
                            <video
                                width={"100%"}
                                height={"100%"}
                                controls
                                loop
                                onMouseMove={onhover}
                                onMouseOut={onout}>
                                <source src={vido} type="video/mp4"/>
                            </video>
                            <div ref={useref} className='video-caption-displying'>
                                <p >
                                    {captionb}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
