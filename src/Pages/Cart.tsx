import { Minus, Plus, Trash } from '@phosphor-icons/react'
import img from '../assets/sun-lingyan-_H0fjILH5Vw-unsplash.jpg'
export function Cart() {
    return (
        <div className="container pt-4">
            <div>
                <h2>My Cart</h2>
            </div>
            <div className='flex w-full justify-between items-center'>
                <div className='w-[60px] rounded-[8px] overflow-hidden'>
                    <img src={img} />
                </div>
                <div>
                    <p>Product Name</p>
                </div>
                <div>
                    <span>$100.00</span>
                </div>
                <div className='flex gap-2 border-[1px] border-slate-900 p-[2px]'>
                    <button>
                        <Plus size={16} />
                    </button>
                    <div>
                        <span>1</span>
                    </div>
                    <button>
                        <Minus size={16} />
                    </button>

                </div>
                <div>
                    <Trash size={22} />
                </div>
            </div>
        </div>
    )
}