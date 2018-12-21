  CREATE TABLE "Cards" (
	"_cardID" serial NOT NULL,
	"definition" varchar NOT NULL,
	"word" varchar NOT NULL UNIQUE,
	"sentence" varchar NOT NULL,
	"type" varchar NOT NULL,
	"timestamp" DATE NOT NULL,
	CONSTRAINT Cards_pk PRIMARY KEY ("_cardID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Flashcards" (
	"_flashcardsID" serial NOT NULL,
	"cardID" int NOT NULL,
	CONSTRAINT Flashcards_pk PRIMARY KEY ("_flashcardsID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Flashcards" ADD CONSTRAINT "Flashcards_fk0" FOREIGN KEY ("cardID") REFERENCES "Cards"("_cardID");
