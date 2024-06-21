const Games = [
    {
        img: 'https://plus.unsplash.com/premium_photo-1670007097576-0af87c2dd32e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'One day Prediction',
        no_of_participents: 120,
        price: 5000,
        time_left: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: '12 hr Prediction',
        no_of_participents: 100,
        price: 2500,
        time_left: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: '6 hr Prediction',
        no_of_participents: 20,
        price: 1000,
        time_left: 5
    },

    {
        img: 'https://plus.unsplash.com/premium_photo-1670007097576-0af87c2dd32e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: '1 hr Prediction',
        no_of_participents: 120,
        price: 500,
        time_left: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: '5 min Prediction',
        no_of_participents: 120,
        price: 100,
        time_left: 5
    },
]

const Transactions = [
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Failed',
        amount: 400,
        date: '20-04-2024'
    },
    {
        mode: 'Deposit',
        status: 'Success',
        amount: 1000,
        date: '12-02-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Deposit',
        status: 'Success',
        amount: 1000,
        date: '12-02-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    },
    {
        mode: 'Withdraw',
        status: 'Success',
        amount: 200,
        date: '20-04-2024'
    }
]


const History = [
    {
        event: 'One Day Prediction',
        status: "Win",
        amout: 10000,
        date: '20-12-2024'
    },
    {
        event: 'One Day Prediction',
        status: "Loss",
        amout: 5000,
        date: '20-12-2024'
    },
    {
        event: '1 hr Prediction',
        status: "Win",
        amout: 1000,
        date: '20-12-2024'
    },
    {
        event: '6 hr Prediction',
        status: "Loss",
        amout: 5000,
        date: '20-12-2024'
    },
    {
        event: '5 min Prediction',
        status: "Loss",
        amout: 100,
        date: '20-12-2024'
    },
]
export { Games, Transactions, History }