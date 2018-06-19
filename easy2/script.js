class options {
	constructor(height, width, bg, fontSize, textAlign) {
		 this.height = height, 
		 this.width = width, 
		 this.bg = bg, 
		 this.fontSize = fontSize, 
		 this.textAlign = textAlign;
	}

	createDiv() {
		let div = document.createElement('div');
		div.textContent = new Date();
		div.style.height = this.height + "px";
		div.style.width = this.width + "px";
		div.style.background = this.bg;
		div.style.fontSize = this.fontSize;
		div.style.textAlign = this.textAlign;
		document.body.appendChild(div);
	}
}

let div1 = new options("200", "100", "red", "16px", "center");
div1.createDiv();