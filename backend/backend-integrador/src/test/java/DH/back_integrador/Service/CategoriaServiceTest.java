package DH.back_integrador.Service;

import DH.back_integrador.model.Categoria;
import DH.back_integrador.service.CategoriaService;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import DH.back_integrador.exceptions.ResourceNotFoundException;
import lombok.extern.slf4j.Slf4j;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@SpringBootTest
@Slf4j
//@Transactional
public class CategoriaServiceTest {

    @Autowired
    private CategoriaService categoriaService;

    @Test
    public void saveCategoriaTest(){
        log.info("Saving the categories");
        Categoria categoria = new Categoria("Categoria1", "descripcion1","url1");
        categoriaService.saveCategoria(categoria);
    }

    @Test
    public void getCategoriaTest(){
        log.info("Searching results of the categorie");
        Categoria categoria = new Categoria("CategoriaUpdate", "descripcionUpdate","urlUpdate");
        Categoria categoriaSaved =  categoriaService.saveCategoria(categoria);
        System.out.println(categoriaService.getCategoria(categoriaSaved.getId()));
    }

    @Test
    public void getAllTest(){
        log.info("Searching results of the all categories");
        Categoria categoria = new Categoria(3,"CategoriaUpdate", "descripcionUpdate","urlUpdate");
        System.out.println(categoriaService.getAllCategoria());
    }

    @Test
    public void updateCategoriaTest(){
        log.info("Updating the categories");
        Categoria categoria = new Categoria(3,"CategoriaUpdate", "descripcionUpdate","urlUpdate");
        Categoria categoriaSaved = categoriaService.saveCategoria(categoria);
        categoriaService.updateCategoria(categoriaSaved.getId(), categoria);
    }

    @Test
    public void deleteCategoriaTest() throws ResourceNotFoundException {
        Categoria categoria = new Categoria(3,"CategoriaDelete", "descripcionDelete","urlDelete");
        Categoria categoriaSaved = categoriaService.saveCategoria(categoria);
        categoriaService.deleteCategoria(categoriaSaved.getId());
    }
}




