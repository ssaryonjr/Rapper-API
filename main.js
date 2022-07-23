document.querySelector('#clickMe').addEventListener('click', grabData);


async function grabData(){
    const rapperName = document.querySelector('#rapperName').value.toLowerCase()
    const res = await fetch(`https://saryon-rapper-api.herokuapp.com/api/${rapperName}`)
    const data = await res.json()

    console.log(data)

}