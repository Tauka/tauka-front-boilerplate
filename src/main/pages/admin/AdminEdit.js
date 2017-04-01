import React from "react";

export default class AdminEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stylePath: "css/adminEdit.css",
			renderIt: false
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
		<div class = "row">
		    <div class = "edit">
		         <h1>
		             РЕДАКТИРОВАТЬ
		         </h1>
		        <div class = "container">
		            <div class ="row">
		                <div class = "col span-1-of-2">
		                    <div class = "box-one">
		                        <div>
		                            <h2>Добавить курс</h2>
		                        </div>
		                        <div class = "row">
		                            <form method="post" action="#" class="add-form">
		                                   <div class="row">
		                                        <div class=" span-1-of-2">
		                                            <label for="code">Код курса</label>
		                                            <input type="text" name="code" id="code" placeholder="" required/>
		                                        </div>
		                                    </div> 
		                                <div class="row">
		                                        <div class=" span-1-of-2">
		                                            <label for="course">Наименование курса</label>
		                                            <input type="text" name="course" id="course" placeholder="" required/>
		                                        </div>
		                                    </div> 
		                                <div class="row">
		                                        <div class=" span-1-of-2">
		                                            <label for="price">Цена курса</label>
		                                            <input type="text" name="price" id="price" placeholder="" required/>
		                                        </div>
		                                    </div> 
		                                
		                            </form>
		                        </div>
		                        
		                       
		                        <div class ="row">
		                            <div class="col span-1-of-4">
		                                    <label>&nbsp;</label>
		                            </div>
		                            <div class="col span-1-of-4">
		                                <input type="submit" value="Добавить"/>
		                            </div>
		                            
		                            <div class="col span-1-of-4">
		                                <input type="submit" value="Удалить"/>
		                            </div>
		                            <div class="col span-1-of-4">
		                                    <label>&nbsp;</label>
		                            </div>
		                        </div>

		                    </div>
		                </div>
		            
		                <div class = "col span-1-of-2">
		                    <div class = "box-one">
		                        <div>
		                            <h2>Добавить пользователя в группу</h2>
		                        </div>
		                        <div class = "row">
		                            <form method="post" action="#" class="delete-form">
		                                   <div class="row">
		                                        <div class=" span-1-of-2">
		                                            <label for="code1">Код курса</label>
		                                            <input type="text" name="code1" id="code1" placeholder="" required/>
		                                        </div>
		                                    </div> 
		                                <div class="row">
		                                        <div class=" span-1-of-2">
		                                            <label for="login">Логин пользователя</label>
		                                            <input type="text" name="login" id="login" placeholder="" required/>
		                                        </div>
		                                    </div> 
		                                    <div class="row">
		                                        <div class=" col span-1-of-4">
		                                           <input type="checkbox" name="discount1" id="discount1" /> Акция 1
		                                                                                    
		                                        </div>
		                                   
		                                   <div class=" col span-1-of-4">
		                                           <input type="checkbox" name="discount2" id="discount2" checked/> Акция 2
		                                                                                    
		                                        </div>
		                                   <div class=" col span-1-of-4">
		                                           <input type="checkbox" name="discount3" id="discount3" /> Акция 3
		                                                                                    
		                                        </div>
		                                   <div class=" col span-1-of-4">
		                                           <input type="checkbox" name="discount4" id="discount4" /> Акция 4
		                                                                                    
		                                        </div>
		                                    </div> 
		                                
		                            </form>
		                        </div>
		                        <div class ="row">
		                            <div class="col span-1-of-4">
		                                    <label>&nbsp;</label>
		                            </div>
		                            <div class="col span-1-of-4">
		                                <input type="submit" value="Добавить"/>
		                            </div>
		                            
		                            <div class="col span-1-of-4">
		                                <input type="submit" value="Удалить"/>
		                            </div>
		                            <div class="col span-1-of-4">
		                                    <label>&nbsp;</label>
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