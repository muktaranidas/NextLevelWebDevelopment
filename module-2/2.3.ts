{
    //
    type GenericArray<T>=Array<T>
    // const rollNumber: number[] = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];
    const mentors: GenericArray<string> = ['Mukta', 'Sudipto', 'Protima']
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user:GenericArray<{name:string,age:number}> = [
        {
            name: "Mukta",
            age:100
        },
        {
            name: "Sudipto",
            age:1
        }
    ]
    //generic tuple
    type GenericTuple<X,Y> = [X,Y]
    const manush:GenericTuple<string,string> =['Sudipto', 'Mukta']
    //
}