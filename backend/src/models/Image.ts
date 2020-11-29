import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Orphanage from "./Orphanage";

// Real life modulation of each orphanage. Used to relate it with the Orphanages table in our database
@Entity("images")  // Relates our class with the orphanages table
export default class Image {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;

}
