import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.entity"

@Injectable()
export class ProdutoService{

    //consulta
    
    async findAll(): Promise<Produto[]> {
        return Produto.find();
    }
}