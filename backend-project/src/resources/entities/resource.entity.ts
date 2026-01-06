import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('resources') 
export class Resource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    category: string; 

	@Column({ nullable: true })
	sub_category: string;
    
    @Column()
    address: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    hours: string;
}