document.addEventListener('DOMContentLoaded', function() {
    var faqItems = document.querySelectorAll('.faq-item');

    for (var i = 0; i < faqItems.length; i++) {
        var item = faqItems[i];
        var question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            var clickedItem = this.parentElement;
            var isActive = clickedItem.classList.contains('active');
            
            var allItems = document.querySelectorAll('.faq-item');
            for (var j = 0; j < allItems.length; j++) {
                if (allItems[j] !== clickedItem) {
                    allItems[j].classList.remove('active');
                    var answer = allItems[j].querySelector('.faq-answer');
                    answer.classList.remove('active');
                }
            }
            
            if (isActive) {
                clickedItem.classList.remove('active');
                var ans = clickedItem.querySelector('.faq-answer');
                ans.classList.remove('active');
            } else {
                clickedItem.classList.add('active');
                var ans = clickedItem.querySelector('.faq-answer');
                ans.classList.add('active');
            }
        });
    }
});