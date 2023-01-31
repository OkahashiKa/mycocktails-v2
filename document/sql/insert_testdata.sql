-- PostgresSQL
-- insert m_material_category deta.
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (1, 'スピッツ', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (2, 'リキュール', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (3, 'ワイン', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (4, 'ジュース', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (5, '炭酸飲料', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (6, 'シロップ', NOW(), NOW());
INSERT INTO m_material_category (id, name, create_at, update_at) VALUES (7, 'その他', NOW(), NOW());

-- insert m_material deta.
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (1, 'ジン', 1, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (2, 'ウォッカ', 1, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (3, 'ラム', 1, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (4, 'テキーラ', 1, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (5, 'カシス', 2, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (6, 'ピーチ', 2, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (7, 'ライチ', 2, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (8, 'カルーア', 2, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (9, '赤ワイン', 3, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (10, '白ワイン', 3, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (11, 'ロゼ', 3, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (12, 'ヴェルモット', 3, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (13, 'オレンジジュース', 4, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (14, 'レモンジュース', 4, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (15, 'ライムジュース', 4, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (16, 'グレープフルーツジュース', 4, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (17, 'ソーダ', 5, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (18, 'トニックウォーター', 5, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (19, 'ジンジャエール', 5, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (20, 'コーラ', 5, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (21, 'ガムシロップ', 6, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (22, 'オリーブ', 7, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (23, 'ミント', 7, NOW(), NOW());
INSERT INTO m_material (id, name, category_id, create_at, update_at)VALUES (24,'ミルク', 7, NOW(), NOW());

-- insert m_cocktail deta.
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (1, 'ジントニック', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (2, 'マティーニ', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (3, 'スクリュードライバー', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (4, 'モスコミュール', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (5, 'カシスソーダ', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (6, 'カシスオレンジ', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (7, 'ファジーネーブル', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (8, 'カルーアミルク', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (9, 'カーディナル', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (10, 'キール', null, null, NOW(), NOW());
INSERT INTO m_cocktail (id, name, remarks, image, create_at, update_at) VALUES (11, 'スプリッツァー', null, null, NOW(), NOW());

-- insert m_cocktail_recipi deta.
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (1, 1, 40, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (1, 18, 120, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (2, 1, 45, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (2, 12, 15, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (2, 22, 1, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (3, 2, 40, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (3, 13, 100, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (4, 2, 45, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (4, 15, 10, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (4, 19, 120, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (5, 5, 40, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (5, 17, 120, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (6, 5, 40, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (6, 13, 120, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (7, 6, 30, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (7, 13, 30, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (8, 8, 30, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (8, 24, 90, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (9, 9, 15, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (9, 5, 45, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (10, 10, 15, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (10, 5, 45, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (11, 10, 30, NOW(), NOW());
INSERT INTO m_cocktail_recipi (cocktail_id, material_id, quantity, create_at, update_at) VALUES (11, 17, 20, NOW(), NOW());

-- insert m_role deta.
INSERT INTO m_role (id, name, create_at, update_at) VALUES (1, 'admin', NOW(), NOW());
INSERT INTO m_role (id, name, create_at, update_at) VALUES (2, 'user', NOW(), NOW());
INSERT INTO m_role (id, name, create_at, update_at) VALUES (3, 'preminum', NOW(), NOW());

--insert m_user deta.
INSERT INTO m_user (id, password, mail, role_id, favo_cocktail_id, create_at, update_at) VALUES ('kazuki.okahashi', '', 'okarians.302.dev@gmail.com', 1, null, NOW(), NOW());

--insert t_user_material deta.
INSERT INTO t_user_material (user_id, material_id, create_at, update_at, delete_at) VALUES ('kazuki.okahashi', 1, NOW(), NOW(), NOW());
INSERT INTO t_user_material (user_id, material_id, create_at, update_at, delete_at) VALUES ('kazuki.okahashi', 18, NOW(), NOW(), NOW());
INSERT INTO t_user_material (user_id, material_id, create_at, update_at, delete_at) VALUES ('kazuki.okahashi', 12, NOW(), NOW(), NOW());
INSERT INTO t_user_material (user_id, material_id, create_at, update_at, delete_at) VALUES ('kazuki.okahashi', 22, NOW(), NOW(), NOW());