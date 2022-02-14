
import './index.css';

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <h2 className='homescreen-tilte'>Latest Product</h2>

            <div className='homescreen_products'>
                <Product />
            </div>
        </div>
    );
}

export default HomeScreen;
