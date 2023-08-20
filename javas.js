
const pegarvalor = document.getElementById('pegarvalor'); 
const Event = document.getElementById('Event');            
const saidaResult = document.getElementById('saidaResult');      

Event.addEventListener('click', Excluir); 

function Excluir() {                            
  const valordigitado = pegarvalor.value;         
  if (valordigitado.trim() !== '') {                 
    const li = document.createElement('li');
    li.innerHTML = `
      ${valordigitado}
      <button class="custom-btn Button">Excluir</button> 
    `;
            saidaResult.appendChild(li);
            pegarvalor.value = '';
    
            const deleteButton = li.querySelector('.custom-btn');
            deleteButton.addEventListener('click', () => {
                saidaResult.removeChild(li);
    });
  }
}
   