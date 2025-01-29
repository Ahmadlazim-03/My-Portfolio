<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>My Portfolio - Ahmad Lazim</title>

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/unicons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/owl.theme.default.min.css') }}">

    <!-- MAIN STYLE -->
    <link rel="stylesheet" href="{{ asset('css/tooplate-style.css') }}">
    <style>
      .popup-image {
    display: none; /* Hide the image by default */
    position: absolute; /* Position it absolutely */
    top: 50%; /* Center it vertically */
    left: 50%; /* Center it horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
    width: 300px; /* Set a width for the image */
    border: 5px solid black; /* Solid border with a color */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    opacity: 0; /* Start with opacity 0 */
    transition: opacity 0.5s ease, transform 0.3s ease; /* Transition for fade effect and scaling */
}

.timeline-wrapper:hover .popup-image {
    display: block; /* Show the image on hover */
    opacity: 1; /* Fade in by changing opacity to 1 */
    transform: translate(-50%, -50%) scale(1.05); /* Slightly scale up on hover */
}
    </style>

  </head>
  <body>

    <!-- MENU -->
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class='uil uil-user'></i>Ahmad Lazim</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="#about" class="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#project" class="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link"><span data-hover="Resume">Resume</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-lg-auto">
                    <div class="ml-lg-4">
                      <div class="color-mode d-lg-flex justify-content-center align-items-center">
                        <i class="color-mode-icon"></i>
                        Color mode
                      </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>

    <!-- ABOUT -->
    <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div class="about-text">
                        <small class="small-text">Welcome to <span class="mobile-block">my portfolio website!</span></small>
                        <h1 class="animated animated-text">
                            <span class="mr-2">Hey folks, I'm</span>
                                <div class="animated-info">
                                    <span class="animated-item">Web Designer</span>
                                    <span class="animated-item">App Designer</span>
                                    <span class="animated-item">Cybersecurity</span>
                                </div>
                        </h1>

                        <p>Mastering knowledge is a challenge. I am highly passionate about learning, exploring, and growing every day.</p>
                        
                        <div class="custom-btn-group mt-4">
                          <a href="#" class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Download Portfolio</a>
                          <a href="https://github.com/Ahmadlazim-03" class="btn custom-btn custom-btn-bg custom-btn-link">My Github</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12 col-12">
                    <div class="about-image svg">
                        <img src="images/undraw/undraw_software_engineer_lvl5.svg" class="img-fluid" alt="svg image">
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- PROJECTS -->
    <section class="project py-5" id="project">
        <div class="container">
                
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">

                      <div class="col-lg-8 mx-auto">
                        <h2>All the projects I've created</h2>
                      </div>

                      <div class="owl-carousel owl-theme">
                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/project-image01.png" class="img-fluid" alt="project image">
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/project-image02.png" class="img-fluid" alt="project image">
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/project-image03.png" class="img-fluid" alt="project image">
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/project-image04.png" class="img-fluid" alt="project image">
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="images/project/project-image05.png" class="img-fluid" alt="project image">
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
        </div>
    </section>

    <!-- FEATURES -->
    <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12">
                <h2 class="mb-4">Experiences</h2>
                <div class="timeline">
                  <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2022</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Programming Sintech SMADAJO</span></h3>
                            <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                            <img src="data:image/png;base64,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" class="popup-image" alt="Project Manager Image">
                        </div>
                    </div>

                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2023</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Programming Logic</span><small>Best Studio</small></h3>
                            <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                            <img src="data:image/png;base64,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" class="popup-image" alt="Project Manager Image">
                        </div>
                    </div>

                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2024</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Web Development</span><small>Digital Ace</small></h3>
                            <p>Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.</p>
                            <img src="path/to/ux-designer-image.jpg" class="popup-image" alt="UX Designer Image">
                        </div>
                    </div>

                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2025</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Mobile Development</span></h3>
                            <p>Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <img src="path/to/ui-freelancer-image.jpg" class="popup-image" alt="UI Freelancer Image">
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-6 col-12">
                <h2 class="mb-4 mobile-mt-2">Educations</h2>
                <div class="timeline">
                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2017</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Mobile Web</span><small>Master Design</small></h3>
                            <p>Please tell your friends about Tooplate website. That would be very helpful. We need your support.</p>
                            <img src="path/to/mobile-web-image.jpg" class="popup-image" alt="Mobile Web Image">
                        </div>
                    </div>

                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2015</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Mobile App</span><small>Creative Agency</small></h3>
                            <p><a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a> is a great website to download HTML templates without any login or email.</p>
                            <img src="path/to/user-interfaces-image.jpg" class="popup-image" alt="User  Interfaces Image">
                        </div>
                    </div>

                    <div class="timeline-wrapper">
                        <div class="timeline-yr">
                            <span>2013</span>
                        </div>
                        <div class="timeline-info">
                            <h3><span>Cyber Security</span><small>New Art School</small></h3>
                            <p>You can freely use Tooplate's templates for your business or personal sites. You cannot redistribute this template without a permission.</p>
                            <img src="path/to/artwork-design-image.jpg" class="popup-image" alt="Artwork Design Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- CONTACT -->
    <section class="contact py-5" id="contact">
      <div class="container">
        <div class="row">
          
          <div class="col-lg-5 mr-lg-5 col-12">
            <div class="google-map w-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.725174355423!2d112.75613117460436!3d-7.272081871457202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd38ea51a2f%3A0x2640d21feb8c9fd8!2sUniversitas%20Airlangga%20-%20Kampus%20Dharmawangsa%20(B)!5e0!3m2!1sid!2sid!4v1738129595624!5m2!1sid!2sid" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

            <div class="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div class="contact-info-item">
                  <h3 class="mb-3 text-white">Ahmad Lazim</h3>
                  <p class="footer-text mb-0">0812-5237-4308</p>
                  <p><a href="mailto:hello@company.co">ahmadlazim422@gmail.com</a></p>
                </div>

                <ul class="social-links">
                     <li><a href="#" class="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble"></a></li>
                     <li><a href="#" class="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                     <li><a href="#" class="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube"></a></li>
                </ul>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="contact-form">
              <h2 class="mb-4">Interested to work together? Let's talk</h2>

              <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

              <form id="contactForm">
                @csrf
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <input type="text" class="form-control" name="FullName" placeholder="Your Name" id="name">
                    </div>

                    <div class="col-lg-6 col-12">
                        <input type="email" class="form-control" name="Email" placeholder="Email" id="email">
                    </div>

                    <div class="col-12">
                        <textarea name="Comment" rows="6" class="form-control" id="message" placeholder="Message"></textarea>
                    </div>

                    <div class="ml-lg-auto col-lg-5 col-12">
                        <button type="submit" class="form-control submit-btn">Send Button</button>
                    </div>
                </div>
            </form>

            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

              <script>
                $(document).ready(function() {
                    $("#contactForm").submit(function(event) {
                        event.preventDefault(); // Mencegah reload halaman

                        Swal.fire({
                          title: "Berhasil Terkirim !",
                          icon: "success",
                          draggable: true
                        });

                        var formData = {
                            _token: $("input[name=_token]").val(), // CSRF Token
                            FullName: $("#name").val(),
                            Email: $("#email").val(),
                            Comment: $("#message").val()
                        };

                        $.ajax({
                            url: "/sendmessage",
                            type: "POST",
                            data: formData,
                            success: function(response) {
                                alert("Pesan berhasil dikirim!");
                                $("#contactForm")[0].reset(); // Reset form setelah submit
                            },
                            error: function(xhr) {
                                alert("Terjadi kesalahan, coba lagi!");
                            }
                        });
                    });
                });
                </script>

            </div>
          </div>

        </div>
      </div>
    </section>

    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/popper.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/Headroom.js') }}"></script>
    <script src="{{ asset('js/jQuery.headroom.js') }}"></script>
    <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('js/smoothscroll.js') }}"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

  </body>
</html>