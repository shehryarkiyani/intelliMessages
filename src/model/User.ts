import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:String;
    createdAt:Date;
}
const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true,
    }
})
export interface User extends Document{
   username:String;
   email: String;
   password: String;
   verifyCode:String;
   verifyCodeExpiry:Date;
   isVerified:Boolean;
   isAcceptingMessage:Boolean;
   messages:Message[]
}

const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        default:Date.now,
        required:[true,"Code expiry date is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:false
    }
})