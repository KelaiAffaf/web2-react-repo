import React from 'react'
import Styles from './Editor.module.css'
function Editor() {
    return (
        <div>
            <div className={Styles.left}>
                <nav className="left">
                    <p>LIVE JSX EDITOR</p>
                    <form>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">JSX?</label>
                    </form>
                </nav>
                <div className="code">
                    <p>
                        {`class HelloMessage extends React.Component {
                            render() {
                                return (
                                <div>
                                    Hello {this.props.name}
                                </div>
                                );
                            }
                            }
                            ReactDOM.render(
                            <HelloMessage name="Taylor" />,
                            document.getElementById('hello-example')
                            );`}
                    </p>
                </div>
            </div>
            <div className="right">
                <nav className="right">
                    <p>RESULT</p>
                </nav>
                <div className="result">
                    <p>Hello Taylor</p>
                </div>
            </div>
        </div>
    )
}

export default Editor
