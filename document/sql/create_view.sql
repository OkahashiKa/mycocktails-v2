CREATE VIEW v_material AS 
SELECT 
  m.id AS materialId,
  m.name AS materialName,
  m.category_id AS categoryId,
  mc.name AS categoryName
FROM m_material AS m
LEFT OUTER JOIN m_material_category AS mc
ON m.category_id = mc.id