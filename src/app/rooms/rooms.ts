export interface Room{

    totalRooms: number;
    availabelRooms: number;
    bookRooms: number;

}

export interface RoomList{
    roomNo:number;
    roomType:string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;

}
