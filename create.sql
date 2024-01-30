-- psql -d ahgora -f create.sql
drop table ahgora.wallet;
drop schema ahgora;

create schema ahgora;

create table ahgora.wallet (
	transactionId text,
	transactionDate timestamp,
	transactionSource text,
	description text,
	value numeric,
);

insert into ahgora.wallet (transactionId, transactionDate, transactionSource, description, value)
	values ("1", 1706479236, "Inter", "Salario", 3000);
insert into ahgora.wallet (transactionId, transactionDate, transactionSource, description, value)
	values ("2", 1706392836, "Inter", "Forno", -1200);
insert into ahgora.wallet (transactionId, transactionDate, transactionSource, description, value)
	values ("3", 1706565636, "Inter", "Uber", -30);
