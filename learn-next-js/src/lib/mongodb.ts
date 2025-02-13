import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    
    if(connectionState === 1) {
        console.log("nice connection!")
        return;
    }
    if(connectionState === 2) {
        console.log("connecting...")
    }

    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "online-store",
            bufferCommands: true
        })
        console.log("connected")
    } catch (error: any) {
        console.error("error", error)
        throw new Error("error", error);
    }

}

export default connect;