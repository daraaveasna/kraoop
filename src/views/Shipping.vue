<template>
    <div class="w-full h-[80px] text-black bg-white navbar flex-row flex">
        <div 
            class="navbar w-[1256px] h-[50px] flex justify-between items-center mx-auto flex-row">
            <div class="felx justify-items-start flex-row">
                <div class="icon flex">
                    <img src="../assets/icons/arrowleft.svg" />
                    <div class="text-[#383838] text-[20px]  ">Home</div>
                </div>
            </div>
            <div class="flex justify-end text-[24px] font-semibold logo">
                <p>
                    <span class="text-[pink]">Kraoop</span>
                    <span class="text-[#383838] "> Beauty</span>
                </p>
            </div>
        </div>
    </div>
    <div class="felx justify-center items-center flex-row mx-28">
        <div class="icon flex">
            <div class="font-bold text-[#383838] text-[15px] m-2 mx-0">Information</div>
            <img src="../assets/icons/arrowdropright.svg" />
            <div class="text-[12px] m-2.5 mx-0">Shipping</div>
        </div>
    </div>

    <div class="flex mt-8 justify-center">
        <div class="w-[804px] h-[452px] flex-col mr-5  bg-white">
            
            <div class="flex-col pl-6 mt-6 pr-6">

                <div class="mt-8">
                    <input class="border w-[100%] p-2 rounded-md" type="text" placeholder="Contact" on-ended="Change">
                </div>
                <div class="mt-8">
                    <input class="border w-[100%] p-2 rounded-md" type="text" placeholder="Ship to">
                </div>
            </div>

            <div class="flex flex-col pl-6 mt-8 pr-6">
               <div class="font-bold">Shipping Method</div>

                <div class="flex flex-col mt-4 justify-between ">

                    <div class="flex "><input type="radio" name="" id="" >
                        <span>Courier at home</span>
                        <span>($5.00)</span>
                    </div>
                        <div class="flex justify-start mx-4 text-[12px]">Can be delivered today</div>
                    
                    <div class="mt-3"><input type="radio" name="" id="" >
                        <span>Fast delivery by Nova pashta</span>
                        <span>($2.00)</span>
                        <div class="flex justify-start mx-4 text-[12px]">Will be delivered within one day</div>

                    </div>
                </div>
            </div>
            <div>
                <button class="bg-pink-400 hover:bg-black text-white py-2 px-4 mx-10 m-10 rounded">Continue to Payment</button>
                <a href="#" class="text-black-500 text-[12px] hover:text-black py-2 px-4">Return to Information</a>
            </div>
        </div>

        <div class="w-[392px] h-[538px] bg-white flex-col pl-6 pt-6 pr-6" >
            <div class="font-bold">
                <h1> Your Order</h1>
            </div>

            <div class="mt-6 flex ">

                <div>
                    <img src="https://via.placeholder.com/100x100">
                </div>
                <div class="ml-4 flex-col">
                    <p class="">Dewy Glow Jelly Cream</p>
                    <p class="mt-3">$19.60</p>

                    <div class="flex mt-3 justify-between center w-[100px]">

                        <div class="flex justify-between  w-[85px] h-[24px] border p-0 rounded-md">
                            <img class="w-[8px] h=[21px]" src="../assets/icons/subtract.svg" alt="subtract">
                            <p> 1 </p>
                            <img src="../assets/icons/add.svg" alt="add">
                        </div>
                        <div class="flex justify-around m-2">
                            <div>
                            <img src="../assets/icons/close.svg" alt="close" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex ">

            <div>
                <img src="https://via.placeholder.com/100x100">
            </div>
            <div class="ml-4 flex-col">
                <p class="">Soft Finish</p>
                <p class="mt-3">$19.60</p>

                <div class="flex mt-3 justify-between center w-[100px]">

                    <div class="flex justify-between  w-[85px] h-[24px] border p-0 rounded-md">
                        <img class="w-[8px] h=[21px]" src="../assets/icons/subtract.svg" alt="subtract">
                        <p> 1 </p>
                        <img src="../assets/icons/add.svg" alt="add">
                    </div>
                    <div class="flex justify-around m-2">
                        <div>
                        <img src="../assets/icons/close.svg" alt="close" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex ">

            <div>
                <img src="https://via.placeholder.com/100x100">
            </div>
            <div class="ml-4 flex-col">
                <p class="">Soft Finish</p>
                <p class="mt-3">$19.60</p>

                <div class="flex mt-3 justify-between center w-[100px]">

                    <div class="flex justify-between  w-[85px] h-[24px] border p-0 rounded-md">
                        <img class="w-[8px] h=[21px]" src="../assets/icons/subtract.svg" alt="subtract">
                        <p> 1 </p>
                        <img src="../assets/icons/add.svg" alt="add">
                    </div>
                    <div class="flex justify-around m-2">
                        <div>
                        <img src="../assets/icons/close.svg" alt="close" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="text-[12px] flex justify-between m-1 ">
                <p>SUBTOTAL</p>
                <p>$84.00</p>
            </div>
            <div class="text-[12px] flex justify-between m-1">
                <p>SHIPPING</p>
                <p>$5.00</p>
            </div>
            <div class="text-[14px] font-blod flex justify-between m-1">
                <p>ESTIMATED TOTAL</p>
                <p>$89.00</p>
            </div>
            
        </div>
            
    </div>
</div>
    
    
</template>

