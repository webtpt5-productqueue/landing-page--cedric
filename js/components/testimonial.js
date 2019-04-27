class Customer {
  constructor(customerElement) {
    this.customerElement = customerElement
    this.customerImage = this.customerElement.querySelector('img')
    this.data = this.customerElement.dataset.testimonial;
    this.testimonial =
      document.querySelector(`.testimonial[data-testimonial='${this.data}']`)

    this.customerImage.addEventListener('click', () => {
      this.select()
    })
  }

  select() {
    const testimonials = document.querySelectorAll('.testimonial')
    testimonials.forEach(testimonial => testimonial.classList.remove('active'))
    this.testimonial.classList.add('active')
  }
}

const customers = document.querySelectorAll('.customer')
customers.forEach(customer => new Customer(customer))
