
const InputComponent  =(props) => {
    return (
        <>
            <div id="cityInputComp">
                            <input type="text" ref={props.inputEl} placeholder="Şehir giriniz :"/>
                            <button onClick={props.weatherCity}>Ekle</button>
                        </div>
        </>
    )
};
export default InputComponent;