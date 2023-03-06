class Movie {
    constructor(movie, director, genre, year){
        this.movie = movie;
        this.director = director;
        this.genre = genre;
        this.year = year;
    }
}

class UI{
     showAlert(message, className){
        // create element
        const div = document.createElement('div');
        // create class for div
        div.className = `${className} alert`;
        // Append message to div
        div.appendChild(document.createTextNode(message));
        // Get parent 
        const container = document.querySelector('.container'); 
        const form = document.getElementById('input-form'); 
        //insert before form 
        container.insertBefore(div,form);

        // Remove alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000)
    }

    addMovieToList(movie){
        // Get list from html
        const list = document.getElementById('movie-list');
        // Create list element
        const row = document.createElement('tr')
        // insert columns 
        row.innerHTML = `<td>${movie.movie}</td>
                         <td>${movie.director}</td>
                         <td>${movie.genre}</td>
                         <td>${movie.year}</td>
                         <td><a href="#" class="delete-movie">X</a></td>`;
        list.appendChild(row);

        console.log(list);
    }


    clearFields(){
        document.getElementById('movie-title').value = ''
        document.getElementById('director').value = ''
        document.getElementById('genre').value = ''
        document.getElementById('year').value = ''
    }

    removeMovie(target){
        if(target.className === 'delete-movie'){
        target.parentElement.parentElement.remove();
        }
    }


}

document.getElementById('input-form').addEventListener('submit',function(e){
    const movieTitle = document.getElementById('movie-title').value
    const directorName = document.getElementById('director').value 
    const genre = document.getElementById('genre').value
    const year = document.getElementById('year').value

    // console.log(`Movie: ${movieTitle} directed by: ${directorName} in the year ${year}. It is of the ${genre} genre`);
    // e.preventDefault();

    // Instantiate Movie 
    const movie = new Movie(movieTitle, directorName, genre, year);

    // Instantiate UI
    const ui = new UI();

    if(movieTitle === '' || directorName === '' || genre === '' || year === ' '){
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addMovieToList(movie)
        ui.showAlert('Successfully added a movie to list', 'success')
    }


    ui.clearFields()
}); 

document.querySelector('.container').addEventListener('click',function(e){
    // Instantiate ui
    const ui = new UI();
    ui.removeMovie(e.target);

    // Show alert 
    if(e.target.className === 'delete-movie'){
        ui.showAlert('You have successfully removed a movie', 'success')
    }

})
