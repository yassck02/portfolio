# yassck02.github.io
Portfolio website

### Technologies
- Angular (typescript)
- Github API and Github Pages
- REST
- Makrdown
- HTML, CSS

### How it works
This 'single page' web app is simply a portal for viewing and displaying information on the personal projects found om my github site. Each project's repository contains a README markdown file in the root directory. This readme file is retrieved as html through a GET request to the Github API. The recieved text is then bound to the [innerHTML] attribute of a div on this page and rendered to the view. A custom project service reads and manages the references to the project repositories from a text file.