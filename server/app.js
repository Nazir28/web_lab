
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cartRoute');
const PORT = process.env.PORT || 2000

const app = express()
app.use(cors()); 
app.use(express.json())
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);



const start = async () => {
    try {
        await mongoose.connect(`mongodb://admin:admin123@localhost:27017/diamond_shop?authSource=admin`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()