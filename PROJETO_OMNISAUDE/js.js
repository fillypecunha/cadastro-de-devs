
//Chamando os elementos do html
const name_User = document.getElementById('name')
const age_User = document.getElementById('age')
const technology = document.getElementById("tecnologia")
const time_exp = document.getElementsByName("experience_time")
const button_add_tec = document.getElementById('add') 
const form = document.getElementById('formulario')
const newColu= document.getElementById('listaTecnologia')
const div_card= document.getElementById("card_user")
const text_area= document.getElementById("section")

// Variavel para adicionar id para lista
let newId = 0
// Array para salvar os dados dos usuarios
let devs = []

// Funçao que cria label dos inputs
function createLabel(text, htmlFor){
    const label= document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    label.className="label_forms"

    return label
}
// funçao que cria novos inputs
function createInput(id, value , name , type='', placeholder="Adciona mais uma tecnologia"){
 const inputNew = document.createElement('input')
 inputNew.id= id
 inputNew.value= value
 inputNew.name= name
 inputNew.type=type
 inputNew.placeholder=placeholder
 inputNew.className="inputs_form"
 return inputNew
}

//  funçao que vai adcionar novos inputs de radios
button_add_tec.addEventListener('click',function(ev){
    const newRow = document.createElement('li')
    const rowId = newId
    newId++
    newRow.id= 'newId-' + rowId
    newRow.className='newId'
    
    const techNameLabel= createLabel('Nome:', 'techName-' + rowId )
    const techNameInput= createInput('techName-' + rowId, null,'techName',)

    const expLabel = createLabel('Experiencia: ')
    const id1 = `expRadio ${newId} .1`
    const expRadio1 = createInput(id1,"1-2 anos",`techExp${newId}`,"radio" )
    const expLabel1 = createLabel('1-2 anos',id1)

    const id2 = `expRadio ${newId} .2`
    const expRadio2 = createInput(id2, '3- 4 anos', `techExp ${newId}`,'radio')
    const expLabel2 = createLabel('3-4 anos',id2)

    const id3 = `expRadio ${newId} .3`
    const expRadio3 = createInput(id3, '5-6 anos', `techExp ${newId}`,'radio')
    const expLabel3 = createLabel('5-6 anos',id3)

    const id4 = `expRadio ${newId} .4`
    const expRadio4 = createInput(id4, '+ de 6 anos', `techExp ${newId}`,'radio')
    const expLabel4 = createLabel(' Mais de 6 anos',id4)
     
    // Botao que remove as tecnologias adcionadas
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type= 'button'
    removeRowBtn.innerHTML=' Remover'
    removeRowBtn.className= 'buttons_submit'
    removeRowBtn.addEventListener('click', function(){
        newColu.removeChild(newRow)
    })
     
    newRow.append(
      techNameLabel , techNameInput, expLabel,expRadio1, expLabel1,expRadio2, expLabel2,expRadio3, expLabel3,expRadio4, expLabel4, removeRowBtn
    )
    newColu.appendChild(newRow)

    ev.preventDefault()

})
    // funçao que vai rederenizar uma nova tecnologia caso queira adcionar novas experiencias 

    form.addEventListener('submit',function(ev){
        ev.preventDefault()
        const select_all_Id= document.querySelectorAll('.newId')

        let technology =[]
        select_all_Id.forEach(function(row){

            const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
            const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

         technology.push({name:techName, exp: techExp})
         
        })

        const newDev ={ fullName: name_User.value, age: age_User.value, resumo: text_area.value, technologies: technology}
        devs.push(newDev)
        if (devs.length< 0) {
            alert('Usuario o curriculo foi cadastrado com sucesso')
            
        }else{
            alert("Preencha o formulario para cadastrar")
        }
        

            
        select_all_Id.forEach(function(row){
            row.remove()
            
        })

        console.log(devs) 
        
       
           
                   devs.forEach(function(elemento){

            const newElement= document.createElement('p')
            newElement.className="curriculum"
            newElement.textContent= "Nome:"+ elemento.fullName +"\n" + "Idade:"+ elemento.age + "\n"+"Resumo:"+ "\n"+ elemento.resumo
            div_card.append(newElement)
            div_card.classList.remove("card_user")
            div_card.classList.add("newcard_user")

            elemento.technologies.forEach(function(experiencias){

                const element_exp=document.createElement('p')
                element_exp.className="curriculum"
                element_exp.textContent = "Linguagem: "+"\n" + experiencias.name + "\n" +"Tempo de Experiencia:"+ experiencias.exp 
                div_card.append(element_exp)
                div_card.classList.remove("card_user")
                div_card.classList.add("newcard_user")
            })
             name_User.value= ''
             age_User.value=''
             text_area=''
        })
        
         
       
       
        

        
    })




