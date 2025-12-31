import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('resources') // Nom de la table dans Postgres
export class Resource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    category: string; // Ex: "Food", "Legal aid", "Shower"

	@Column({ nullable: true })
	sub_category: string;
    
    @Column()
    address: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    hours: string;
}