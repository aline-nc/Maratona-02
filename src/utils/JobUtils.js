module.exports = {
  remainingDays(job) {
    //calculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
  
  const createdDate = new Date(job.created_at)//vai pegar o dia que foi criado o projeto
  const dueDay = createdDate.getDate()+ Number( remainingDays)//dia do vencimento
  const dueDateInMs = createdDate.setDate(dueDay)//data futura
  //aqui estava dueDate
  const timeDiffInMs = dueDateInMs - Date.now()
  //transformar milissegundo em dias 
  const dayInMs = 1000*60*60*24//milissegundo,segundos,minutos e  dia
  const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
  
  //restam x dias
    return dayDiff
      },
      calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
    }