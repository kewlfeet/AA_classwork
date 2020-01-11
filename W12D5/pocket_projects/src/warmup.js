
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    Array.from(htmlElement.children).forEach(child => {
        htmlElement.removeChild(child)
    });
    let para = document.createElement("p");
    para.innerHTML = string;
    htmlElement.appendChild(para);
    
};

// htmlGenerator('Party Time.', partyHeader);
htmlGenerator('Welcome To The Pocket Project Marathon!', partyHeader);