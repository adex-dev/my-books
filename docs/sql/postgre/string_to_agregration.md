---
title: String Aggregation
---

> Digunakan untuk menggabungkan banyak row menjadi satu string.

## contoh

| item | transaction |
| ---- | ----------- |
| 3    | 1003        |
| 1    | 1001        |
| 2    | 1002        |

### Query

```sql
SELECT
    tl.vendor_id,
    STRING_AGG(t.tranid::text, '; ' ORDER BY tl.item) AS lpb
FROM transaction_line tl
JOIN transactions t
    ON t.id = tl.transaction
GROUP BY tl.vendor_id;
```

### Result

| vendor_id | lpb              |
| --------- | ---------------- |
| 1         | LPB-001; LPB-002 |
| 2         | LPB-010; LPB-011 |

## istilah lain pada sql

| Database   | Function         |
| ---------- | ---------------- |
| PostgreSQL | `STRING_AGG()`   |
| Oracle     | `LISTAGG()`      |
| MySQL      | `GROUP_CONCAT()` |
| SQL Server | `STRING_AGG()`   |
