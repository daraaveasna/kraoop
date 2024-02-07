<template>
    <div class="w-full h-[80px] text-black bg-white navbar flex-row flex">
        <div 
            class="navbar w-[1256px] h-[80px] flex justify-between items-center mx-auto flex-row">
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

    <div class="flex mt-8 justify-center">
        <div class="w-[804px] h-[865px] flex-col mr-5  bg-white">
            
            <div class="flex-col pl-6 mt-6 pr-6">

                <div class="flex justify-between">
                    <div class="font-bold">
                        <p> Contact Information</p>
                    </div>
                    
                    <p>Do you already have an account? Log In</p>
                </div>

                <div class="mt-8">
                    <input class="border w-[100%] p-2 rounded-md" type="text" placeholder="Email">
                </div>

                <div class="mt-8">
                    <input class="mr-2 w-[20px] h-[20px]" type="checkbox" name="" id="">
                    <span class="">Yes, I want subscribe to newsletter now</span>
                </div>
            </div>

            <div class="flex flex-col pl-6 mt-8 pr-6">
               <h1>Delivery Method</h1>

                <div class="flex flex-col mt-4 ">

                    <div class=""><input type="radio" name="" id="" > <span>Ship</span></div>
                    <div class="mt-3"><input type="radio" name="" id="" > <span>Peck Up</span></div>
                </div>
            </div>

            <div class=" flex-col pl-6 mt-8 pr-6">
                <h1> Shipping Address</h1>

                <div class="mt-5">
                    <input  class="border w-[49%] p-2 rounded-md" type="text" placeholder="First Name">
                    <input class="border w-[49%] p-2 ml-3 rounded-md" type="text" placeholder="Last Name">
                </div>

                <div class="mt-5">
                    <p class="text-[15px]">Country</p>
                    <input class="border w-[100%] p-2 rounded-md" type="text" placeholder="Combodia">
                </div>
                
                <input class="border w-[100%] p-2 rounded-md mt-5"  type="text" placeholder="Address">

                <div class="mt-5">
                    <input class="border w-[49%] p-2 rounded-md" type="text" placeholder="City">
                    <input class="border w-[49%] p-2 rounded-md ml-3" type="text" placeholder="Postal Code">
                </div>

                <input class="border w-[100%] p-2 rounded-md mt-5"  type="text" placeholder="Phone">

                <div class="mt-10">
                    <input class="border w-[50%] p-2 rounded-md bg-[#F5A3B7] "  type="button" value="Continue To Shipping">
                </div>
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
        <div class="mt-10 flex justify-between m-1">
            <p>SUBTOTAL</p>
            <P>$84.00</P>

        </div>
            
    </div>
</div>
    
    
</template>

