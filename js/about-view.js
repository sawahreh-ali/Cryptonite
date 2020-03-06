var aboutView = function() {
    let innerHtml = `
                    <div class="card-user w-100">
                        <img src="../assets/imgs/profile.jpg" alt="Ali Sawahreh" style="height: 400px; width: 300px">
                        <h1>Ali Sawahreh</h1>
                        <p class="title-user">Full Stack Developer</p>
                        <p>Arab American University</p>
                        <a href="https://github.com/sawahreh-ali" target="_blank" class="a-user"><i class="fa fa-github"></i></a>
                        <a href="https://twitter.com/AliSawahreh" target="_blank" class="a-user"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/alisawahreh/" target="_blank" class="a-user"><i class="fa fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/ali.sawahreh" target="_blank" class="a-user"><i class="fa fa-facebook"></i></a>
                    </div>
    `;
    return innerHtml;
}

export { aboutView };