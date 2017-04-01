import React from "react";

export default class AdminRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stylePath: "css/adminNewUser.css",
			renderIt: false,
		}
	}

	componentDidMount() {
		document.getElementById("pagestyle").setAttribute("href", this.state.stylePath);
		this.setState({
			renderIt: true
		});
	}

	render() {

		let render = this.state.renderIt ?
		<div>
			<div class = "row">
			    <div class = "edit">
			         <h1>
			             Добавить пользователя
			         </h1>
			        <div class = "container">
			            <div class ="row">
			                <div class = "col span-1-of-2">
			                    <div class = "box-one">
			                        <div class = "row">
			                            <form method="post" action="#" class="add-form">
			                                   <div class="row">
			                                        <div class=" span-1-of-2">
			                                            <label for="name">Имя</label>
			                                            <input type="text" name="name" id="name" placeholder="" required/>
			                                        </div>
			                                    </div> 
			                                <div class="row">
			                                        <div class=" span-1-of-2">
			                                            <label for="fname">Фамилия</label>
			                                            <input type="text" name="fname" id="fname" placeholder="" required/>
			                                        </div>
			                                    </div> 
			                                <div class="row">
			                                        <div class=" span-1-of-2">
			                                            <label for="login">Логин</label>
			                                            <input type="text" name="login" id="login" placeholder="" required/>
			                                        </div>
			                                    </div> 
			                                <div class="row">
			                                        <div class=" span-1-of-2">
			                                            <label for="pass">Пароль</label>
			                                            <input type="text" name="pass" id="pass" placeholder="" required/>
			                                        </div>
			                                    </div> 
			                                <div class="row">
			                                        <div class="span-1-of-2">
			                                            <label for="access">Уровень доступа</label>
			                                            <select name="accesslevel" id="acceslevel">
			                                                <option value="administrator" selected>Администратор</option>
			                                                <option value="manager">Менеджер</option>
			                                                <option value="user">Пользователь</option>
			                                                                                            
			                                               
			                                            </select>
			                                        </div>
			                                    </div> 
			                            </form>
			                        </div>
			                        
			                       
			                        

			                    </div>
			                </div>
			            
			                <div class = "col span-1-of-2">
			                    <div class = "box-one">
			                        <div class = "btn"> 
			                          <div class="col span-1-of-4">
			                                <input type="submit" value="Добавить"/>
			                            </div>
			                        </div>
			                        
			                        
			                    </div>
			                </div> 
			            </div>      
			           
			        </div>
			    </div>
			 </div>
		</div>
		:
		null;

		return(
			render
		)
	}
}