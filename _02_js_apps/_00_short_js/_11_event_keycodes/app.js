const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e)

    insert.innerHTML = `
    <div class="key">
            <!-- a -->
            ${e.key == ' ' ? "Space" : e.key}
            <small>event.key</small>
        </div>

        <div class="key">
            <!-- 65 -->
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            <!-- KeyA -->
            ${e.code}
            <small>event.code</small>
        </div>

        
    </div>
    `

})