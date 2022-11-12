window.onload = () => {
    console.log("로딩되었습니다")
    const payload = localStorage.getItem("payload");
    const payload_parse = JSON.parse(payload)    

    const intro = document.getElementById("intro")
    intro.innerText = payload_parse.email
}
