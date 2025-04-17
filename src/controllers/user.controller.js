import { asyncHandler } from "../utils/asyncHandler.js";

const resgisterUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        messsage: "chai aur code"
    })
})

export {resgisterUser}