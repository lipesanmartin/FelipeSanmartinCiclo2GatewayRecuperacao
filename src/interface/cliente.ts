import { ApiProperty } from "@nestjs/swagger";

export class Cliente {
    
    @ApiProperty()
    cliente_id: number;

    @ApiProperty()
    nome: string

    @ApiProperty()
    email: string

}