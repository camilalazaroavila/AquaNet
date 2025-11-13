function toggleFilter(filterId) {
    const filterOptions = document.getElementById(filterId);
    const filterToggle = filterOptions.previousElementSibling;
    
    filterOptions.classList.toggle('active');
    filterToggle.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const posts = document.querySelectorAll('.forum-post');
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    post.style.display = 'grid';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }

    const filterCheckboxes = document.querySelectorAll('.filter-option input');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
});

function applyFilters() {
    const checkedZonas = Array.from(document.querySelectorAll('.filter-option input:checked'))
        .map(cb => cb.value);
    
    const posts = document.querySelectorAll('.forum-post');
    
    if (checkedZonas.length === 0) {
        posts.forEach(post => post.style.display = 'grid');
        return;
    }
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const shouldShow = checkedZonas.some(zona => 
            title.includes(zona.replace('-', ' '))
        );
        
        post.style.display = shouldShow ? 'grid' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const publishBtn = document.querySelector('.publish-btn');
    
    if (publishBtn) {
        publishBtn.addEventListener('click', function() {
            alert('Funcionalidad de publicación - Aquí se abriría un modal para crear una nueva publicación');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('Funcionalidad de compartir - Aquí se copiaría el enlace de la publicación');
        });
    });
});