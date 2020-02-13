export const korpaMixin={
    data:function(){
        return{
        stavke:['Stefan']}
    },
    methods:{
        getStavke(){
            return {stavke:this.stavke};
        },
        dodajStavku(product){
            this.stavke.push(product);
        }
    }
}