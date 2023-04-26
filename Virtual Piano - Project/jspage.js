document.addEventListener("keydown", function(e) {
    if (e.code == "KeyA") {
        console.log("The 'A' key is pressed.")
        let audioA = new Audio("resources/A.mp3")
        audioA.play()
    }
    else if (e.code == "KeyS") {
        console.log("The 'S' key is pressed.")
        let audioS = new Audio("resources/S.mp3")
        audioS.play()
    }
    else if (e.code == "KeyD") {
        console.log("The 'D' key is pressed.")
        let audioD = new Audio("resources/D.mp3")
        audioD.play()
    }
    else if (e.code == "KeyF") {
        console.log("The 'F' key is pressed.")
        let audioF = new Audio("resources/F.mp3")
        audioF.play()
    }
    else if (e.code == "KeyG") {
        console.log("The 'G' key is pressed.")
        let audioG = new Audio("resources/G.mp3")
        audioG.play()
    }
    else if (e.code == "KeyH") {
        console.log("The 'H' key is pressed.")
        let audioH = new Audio("resources/H.mp3")
        audioH.play()
    }
    else if (e.code == "KeyJ") {
        console.log("The 'J' key is pressed.")
        let audioJ = new Audio("resources/J.mp3")
        audioJ.play()
    }
    else if (e.code == "KeyW") {
        console.log("The 'W' key is pressed.")
        let audioS = new Audio("resources/W.mp3")
        audioS.play()
    }
    else if (e.code == "KeyE") {
        console.log("The 'E' key is pressed.")
        let audioD = new Audio("resources/E.mp3")
        audioD.play()
    }
    else if (e.code == "KeyT") {
        console.log("The 'T' key is pressed.")
        let audioF = new Audio("resources/T.mp3")
        audioF.play()
    }
    else if (e.code == "KeyY") {
        console.log("The 'Y' key is pressed.")
        let audioG = new Audio("resources/Y.mp3")
        audioG.play()
    }
    else if (e.code == "KeyU") {
        console.log("The 'U' key is pressed.")
        let audioH = new Audio("resources/U.mp3")
        audioH.play()
    } else {
        console.log("Warning! Wrong key!")
    }

})