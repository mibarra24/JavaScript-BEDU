const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: () => {
      const today = new Date()
      const year = today.getFullYear()
      this.age = year - this.birthYear
    }
  }

  john.calculateAge()

  console.log(john)
