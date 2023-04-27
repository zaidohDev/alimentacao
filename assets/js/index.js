const alaA = document.querySelector("#alaA")
const diets = document.querySelector(".diets")
const calcular = document.querySelector("#calcular")
const result = document.querySelector("#result")
const k = 24
const qnt = 0;
const un = 0;
diets.value=0

const calcCaixas = (un, qnt) => {
  
  if (alaA.value !== "") {
    
    qnt = Math.floor(alaA.value / k)
   
    un = (alaA.value - qnt * k) - diets.value
    
    if (un < 0) {
      let k = -24
      const df = Math.ceil(un / k)
      const cx = qnt - df
      if (cx < 0) return result.value = "Há mais dietas do que o quantitativo total"
      const u = un + 24*df

      return result.value =`
    ALA: ${alaA.name};
    QUANTIDADE: ${alaA.value}; 
    CAIXAS: ${cx}; 
    UNIDADES: ${u}; 
    DIETAS: ${diets.value}`
    }
    return result.value = `
    ALA: ${alaA.name}; 
    QUANTIDADE: ${alaA.value}; 
    CAIXAS: ${qnt};  
    UNIDADES: ${un};  
    DIETAS: ${diets.value}` 
  } else {
   return result.value = "todos os campos são obrigatórios" 
  }
}

const reset = () => {
  alaA.value = ""
  alaB.value = ""
  alaC.value = ""
}

calcular.addEventListener("click", () => { 
  calcCaixas()
  
} )