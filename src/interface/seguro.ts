import { ApiProperty } from "@nestjs/swagger";

export class Seguro {
    
    @ApiProperty()
    seguro_id: number;

    @ApiProperty()
    modelo: string

    @ApiProperty()
    placa: string
    
    @ApiProperty()
    cliente_id: number

}