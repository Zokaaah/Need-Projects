import styles from './sign.Module.css'
import image from './img/SIGN.svg'


function Sign(){
    return(
        <div>

    <div className='mainDiv'>        
            <div className="tabs">

                {/* LOGIN */}
                <div className="tab">
                <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"></input>
                <label for="tab-1" class="tab-label">Login</label>


                <div className="tab-content">
                    <div className="form_control">
                    <label>Login</label>
                    <input></input>          
                    <label>Senha</label>
                    <input></input>
                    <button class="btn1">Entrar</button>
                    </div>

                </div>
                </div>

                {/* CADASTRO */}
                <div class="tab">
                <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"></input>
                <label for="tab-2" class="tab-label">Cadastro</label>
                <div class="tab-content">
                <div className="form_control">

                <label>Nome completo</label>
                    <input class={styles.input}></input>
                    <label>Email</label>
                    <input></input>
                    <label>Senha</label>
                    <input></input>
                    <button class="btn1">Cadastrar</button>
                    </div>

                </div>
                </div>
    
     
 
        </div>
        <div className='divImage'>
            <img className='image' src={image} alt="image"></img>
        </div>

       
        </div>

</div>



       
    )
}
export default Sign;
    