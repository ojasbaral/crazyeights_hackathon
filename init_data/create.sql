DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(250) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS prescriptions CASCADE;
CREATE TABLE prescriptions (
    prescription_id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

DROP TABLE IF EXISTS prescriptions_users CASCADE;
CREATE TABLE prescriptions_users (
    _prescription_id SERIAL NOT NULL,
    _user_id SERIAL NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    quantity INT,
    PRIMARY KEY (_prescription_id, _user_id, start_date, end_date),
    FOREIGN KEY (_prescription_id) REFERENCES prescriptions(prescription_id),
    FOREIGN KEY (_user_id) REFERENCES users(user_id)
);

DROP TABLE IF EXISTS pharmacies CASCADE;
CREATE TABLE pharmacies (
    pharmacy_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS pharmacies_prescriptions CASCADE;
CREATE TABLE pharmacies_prescriptions (
    _pharmacy_id SERIAL NOT NULL,
    _prescription_id SERIAL NOT NULL,
    PRIMARY KEY (_pharmacy_id, _prescription_id),
    FOREIGN KEY (_pharmacy_id) REFERENCES pharmacies(pharmacy_id),
    FOREIGN KEY (_prescription_id) REFERENCES prescriptions(prescription_id)
);