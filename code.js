layout_buttons();
setInterval(function() {
    let c = document.getElementById("a_buttons_section");
    if (!c) {
        layout_buttons();
    }
}, 3000);


function newButton(title) {
    const btn = document.createElement("button");
    btn.classList = "artdeco-button artdeco-button--2 artdeco-button--secondary ember-view";
    btn.innerHTML = '<span class="artdeco-button__text">' + title + '</span>';
    return btn;
}

function layout_buttons() {
    let sbox = document.querySelector(".ad-banner-container ");
    if (sbox) {
        var div = document.createElement('div');
        div.style = "margin: 10px;";
        div.id = "a_buttons_section";
        sbox.prepend(div);

        const btn = newButton("A:) CONNECT");
        div.appendChild(btn);
        btn.addEventListener("click", function() {
            a_connect_click();
        });

        const btn2 = newButton("A:) CONNECT ALL");
        div.appendChild(btn2);
        btn2.addEventListener("click", function() {
            a_connect_all();
        });

    } else {
        console.log("no search box");
    }
}


const observer = new MutationObserver(function(mutations_list) {
    var modal_blck = document.querySelector("#artdeco-modal-outlet");
    if (modal_blck.firstChild) {
        // popup ask to type connect's email
        let button = modal_blck.querySelector(".artdeco-button--primary:not([disabled])");
        if (button) {
            var clickEvent = new MouseEvent("click", {
                "view": window,
                "bubbles": true,
                "cancelable": false
            });
            button.dispatchEvent(clickEvent);
        } else {
            modal_blck.querySelector("button[data-test-modal-close-btn]").click();
        }
    }
});

const clickOnButton = (button) => {
    return new Promise(async(resolve, reject) => {
        var clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });
        setTimeout(function() {
            button.dispatchEvent(clickEvent);
        }, 1000);
    });
};


function a_connect_click() {
    let modal = document.querySelector("#artdeco-modal-outlet");
    observer.observe(modal, { subtree: false, childList: true });

    let s = [];

    document.querySelectorAll('button > [type=connect]').forEach((userItem) => {
        s.push(clickOnButton(userItem.parentElement));
    });

    let finish = new Promise(async(resolve, reject) => {
        setTimeout(function() {
            observer.disconnect();
        }, s.length * 1500);
    });
    s.push(finish);
    (async() => {
        for await (const num of s) {
            console.log(num);
        }
    })();
}



function a_connect_all() {
    var next_button = document.querySelector("button.artdeco-pagination__button--next:not([disabled])");
    if (next_button) {
        a_connect_click();
        let cc = document.querySelectorAll('button > [type=connect]').length;
        setTimeout(function() {
            next_button.click();

            setTimeout(function() {
                a_connect_all();
            }, 5000);
        }, cc * 1500 + 2000);
    }
}